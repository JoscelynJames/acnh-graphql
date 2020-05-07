import { GraphQLEnumType } from 'graphql';

const bodyTitleEnum = new GraphQLEnumType({
	name: 'bodyTitleEnum',
	values: {
		'Art': { value: 'Art' },
		'BagColor': { value: 'Bag color' },
		'Bamboo': { value: 'Bamboo' },
		'BarrelColor': { value: 'Barrel color' },
		'BlockColor': { value: 'Block color' },
		'Body': { value: 'Body' },
		'BodyColor': { value: 'Body color' },
		'BrickColor': { value: 'Brick color' },
		'Can': { value: 'Can' },
		'Cardboard': { value: 'Cardboard' },
		'ChairBackAndSeat': { value: 'Chair back and seat' },
		'Coating': { value: 'Coating' },
		'Color': { value: 'Color' },
		'CoverDesign': { value: 'Cover design' },
		'CoverPattern': { value: 'Cover pattern' },
		'Creation': { value: 'Creation' },
		'Decorations': { value: 'Decorations' },
		'Design': { value: 'Design' },
		'Dish': { value: 'Dish' },
		'Easel': { value: 'Easel' },
		'Fabric': { value: 'Fabric' },
		'Finish': { value: 'Finish' },
		'Flavor': { value: 'Flavor' },
		'FlowerColor': { value: 'Flower color' },
		'Food': { value: 'Food' },
		'Frame': { value: 'Frame' },
		'FruitType': { value: 'Fruit type' },
		'Genre': { value: 'Genre' },
		'HayCondition': { value: 'Hay condition' },
		'Illumination': { value: 'Illumination' },
		'KnitCapColor': { value: 'Knit-cap color' },
		'LightColor': { value: 'Light color' },
		'LumberType': { value: 'Lumber type' },
		'MapCenter': { value: 'Map center' },
		'MushroomType': { value: 'Mushroom type' },
		'Name': { value: 'Name' },
		'Navigation': { value: 'Navigation' },
		'NutColor': { value: 'Nut color' },
		'Paint': { value: 'Paint' },
		'PaintColor': { value: 'Paint color' },
		'PlateColor': { value: 'Plate color' },
		'RoofColor': { value: 'Roof color' },
		'Season': { value: 'Season' },
		'ShellColor': { value: 'Shell color' },
		'Sign': { value: 'Sign' },
		'Stone': { value: 'Stone' },
		'Tabletop': { value: 'Tabletop' },
		'TireColor': { value: 'Tire color' },
		'Variation': { value: 'Variation' },
	}
});

export default bodyTitleEnum;