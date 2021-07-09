import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import Text, { TextDoc } from '../model/texts.model';

export async function createText(input: DocumentDefinition<TextDoc>) {
    return Text.create(input);
}

export async function findText(query: FilterQuery<TextDoc>, options: QueryOptions = { lean: true }) {
    return Text.findOne(query, {}, options);
}

export async function findAndUpdateText(query: FilterQuery<TextDoc>, update: UpdateQuery<TextDoc>, options: QueryOptions) {
    return Text.findOneAndUpdate(query, update, options);
}

export async function deleteText(query: FilterQuery<TextDoc>) {
    return Text.deleteOne(query);
}

export async function deleteAllText() {
    return Text.deleteMany({});
}
