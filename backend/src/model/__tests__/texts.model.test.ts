import Texts, { TextDoc } from '../texts.model';
import { createText, findText, findAndUpdateText, deleteText, deleteAllText } from '../../service/text.service';

describe('Text model', () => {
    afterAll(async () => {
        await deleteAllText();
    });

    afterEach(async () => {
        await deleteAllText();
    });
});
