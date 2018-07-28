exports.resolvers = {
    Query: {
        getAllSoftware: () => { }
    },
    Mutation: {
        addSoftware: async (root,
            { name, description, paradigm, discipline, username },
            { Software }) => {
            const newSoftware = await new Software({
                name,
                description,
                paradigm,
                discipline,
                username
            }).save()
            return newSoftware
        }
    }
}