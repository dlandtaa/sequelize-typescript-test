import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'some_table', timestamps: false })
class MyModel extends Model {
    @PrimaryKey
    @Column
    myId: string;

    @Column
    name: string;
}

export { MyModel };
