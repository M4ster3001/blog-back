import "reflect-metadata"

import { ApolloServer } from 'apollo-server'
import path from 'path'

import { buildSchema } from "type-graphql"
import { UserResolver } from "./graphql/resolvers/UserResolver"

// PORT
const PORT = 5000 || process.env.PORT

async function main() {

  const schema = await buildSchema({
    // resolvers: [__dirname + "/resolvers/**/*.ts"],
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({ schema })

  // localhost setup
  const { url } = await server.listen(PORT)
  console.log(`Server is running on ${url}`)

}

main()