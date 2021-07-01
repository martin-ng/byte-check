import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import Text, { TextDoc } from '../model/texts.model';

export function createText(input: DocumentDefinition<TextDoc>) {
    return Text.create(input);
}

export function findText(query: FilterQuery<TextDoc>, options: QueryOptions = { lean: true }) {
    return Text.findOne(query, {}, options);
}

export function findAndUpdateText(query: FilterQuery<TextDoc>, update: UpdateQuery<TextDoc>, options: QueryOptions) {
    return Text.findOneAndUpdate(query, update, options);
}
