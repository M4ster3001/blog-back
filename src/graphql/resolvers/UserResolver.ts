import { User } from "../../models/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { randomUUID } from "crypto";

// query: get data
// mutation: create, update and delete

@Resolver()
export class UserResolver {
    private data: User[] = []

    @Query(() => [User])
    async Users() {
        return this.data
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ) {
        const user = {
            id: randomUUID(),
            name
        }

        this.data.push(user)

        return user
    }
}