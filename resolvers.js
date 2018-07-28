exports.resolvers = {
    Query: {
        getAllSoftware: () => { }
    },
    Mutation: {
        addSoftware: async (root,
            { name, description, category, instructions, username },
            { Software }) => {
            const newSoftware = await new Software({
                name,
                description,
                category,
                instructions,
                username
            }).save()
            return newSoftware
        }
    }
}