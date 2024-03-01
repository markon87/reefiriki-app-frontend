import {gql} from '@apollo/client';

const GET_FISHES = gql`
query GetFishes {
  getFishes {
    id
    name
    imageUrl
  }
}`

const GET_FISH = gql`
query GetFish($id: ID) {
  getFish(ID: $id) {
    id
    name
    family {
      id
      name
    }
    careLevel
    temperament
    diet
    reefCompatibility
    maxSize
    minTankSize
    imageUrl
  }
}`


export {GET_FISHES, GET_FISH}