import { Resolver, Query, Arg } from 'type-graphql';

import { Dog } from './dog';
import dogs from './dogs.json';

@Resolver(Dog)
export class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return dogs;
  }
}
