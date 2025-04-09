import axios from "axios";

class CommandService {
  async newCommand(
    userId: number,
    products: {
      id: string;
      reference: string;
      quantity: number;
    }[],
    stripeSession: string
  ) {
    const commandResponse = await this.createCommand(userId, stripeSession);
    const command = await commandResponse;
    const commandId = command.data.result.id;

    await Promise.all(
      products.map(async (product) => {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}commandsDetails`,
          {
            data: {
              commandId: commandId,
              productId: product.id,
              quantity: product.quantity,
            },
          },
          { withCredentials: true }
        );
      })
    );

    return command;
  }
  async createCommand(userId: number, strpeSession: string) {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}commands`,
      {
        data: {
          userId: userId,
          commandStateId: 1,
          stripeSession: strpeSession,
        },
      },
      { withCredentials: true }
    );
    return response;
  }
}

export const commandService = new CommandService();
