import { parseFile } from '../index.js';

(async () => {
    
    const records = await parseFile('./example/App_Privacy_Report_v4_2021-09-15T08_24_30.ndjson')
    console.log(records);

})();