const hds2g = {
  name: "hds",
  age: 18,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => hds2g
  }
};

export default resolvers;
