import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';

// Enums and Types
import Category from '../enums/category';
import Version from '../enums/version';

const recipeType = new GraphQLObjectType({
	name: 'Recipe',
	fields: {
		sourceSheet: { type: GraphQLString },
		name: { type: GraphQLString },
		source: { type: [GraphQLString] },
		sourceNotes: { type: GraphQLString },
		version: { type: Version },
		category: { type: Category },
		internalId: { type: GraphQLInt },
		uniqueEntryId: { type: GraphQLString },
		materials: { [GraphQLString]: GraphQLInt },
	}
});

export default recipeType;
