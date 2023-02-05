import { type Document, type WithId } from 'mongodb'
import { type AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { type AccountModel } from '../../../../domain/models/account'
import { type AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')

    const { insertedId } = await accountCollection.insertOne(accountData)
    const { _id, ...accountFind } = await accountCollection.findOne() as WithId<Document>

    return Object.assign({}, accountFind, { id: insertedId }) as unknown as AccountModel
  }
}
