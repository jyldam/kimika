import util from 'util';
import {Options, parse} from 'csv-parse';

const parseCsv = util.promisify<Buffer, Options, string[][]>(parse);

export default parseCsv;
