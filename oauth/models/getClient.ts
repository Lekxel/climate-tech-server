const getClient = async (clientId: string, clientSecret: string) => {
  if (clientId === "climate") {
    const client = await { id: "climate", grants: ["password"] };
    return client;
  }
  return null;
};

export default getClient;
