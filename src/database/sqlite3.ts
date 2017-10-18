import { sqlite } from '../config'

sqlite.serialize(function () {
    sqlite.run('CREATE TABLE lorem (info TEXT)');

    const stmt = sqlite.prepare('INSERT INTO lorem VALUES (?)');
    for (let i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i);
    }
    stmt.finalize();

    sqlite.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info);
    });
});

sqlite.close();