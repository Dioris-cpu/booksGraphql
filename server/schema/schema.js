const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

// dummy data
var books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1", authorId: "1" },
  { name: "Social", genre: "Psychology", id: "2", authorId: "2" },
  { name: "Iron John", genre: " Social Sciences", id: "3", authorId: "3" },
  {
    name: "The Light Around the Body",
    genre: " Social Sciences",
    id: "4",
    authorId: "3",
  },
];

var authors = [
  { name: "Patrick Rothfuss", age: 47, id: "1", bookId: "1" },
  { name: "Matthew Lieberman", age: 50, id: "2", bookId: "2" },
  { name: "Robert Bly ", age: 94, id: "3", bookId: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    book: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});

debugger;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source

        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of all books",
      resolve: (parent, args) => books,
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "List of all authors",
      resolve: (parent, args) => authors,
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
