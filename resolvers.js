exports.resolvers = {
    Query: {
        getAllSoftware: async (root,
            args,
            { Software }) => {
            // const allSoftware = await Software.find()
            // return allSoftware
            // shorthand =
            return await Software.find()
        }
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