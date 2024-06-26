import { EntityManager } from 'typeorm';

import { DEV_SEED_CONNECTED_ACCOUNT_IDS } from 'src/database/typeorm-seeds/workspace/connected-account';
import { MessageChannelSyncSubStatus } from 'src/modules/messaging/standard-objects/message-channel.workspace-entity';

const tableName = 'messageChannel';

export const DEV_SEED_MESSAGE_CHANNEL_IDS = {
  TIM: '20202020-9b80-4c2c-a597-383db48de1d6',
  JONY: '20202020-5ffe-4b32-814a-983d5e4911cd',
  PHIL: '20202020-e2f1-49b5-85d2-5d3a3386990c',
};

export const seedMessageChannel = async (
  entityManager: EntityManager,
  schemaName: string,
) => {
  await entityManager
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${tableName}`, [
      'id',
      'createdAt',
      'updatedAt',
      'deletedAt',
      'isContactAutoCreationEnabled',
      'type',
      'connectedAccountId',
      'handle',
      'visibility',
      'syncSubStatus',
    ])
    .orIgnore()
    .values([
      {
        id: DEV_SEED_MESSAGE_CHANNEL_IDS.TIM,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isContactAutoCreationEnabled: true,
        type: 'email',
        connectedAccountId: DEV_SEED_CONNECTED_ACCOUNT_IDS.TIM,
        handle: 'tim@apple.dev',
        visibility: 'share_everything',
        syncSubStatus:
          MessageChannelSyncSubStatus.FULL_MESSAGES_LIST_FETCH_PENDING,
      },
      {
        id: DEV_SEED_MESSAGE_CHANNEL_IDS.JONY,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isContactAutoCreationEnabled: true,
        type: 'email',
        connectedAccountId: DEV_SEED_CONNECTED_ACCOUNT_IDS.JONY,
        handle: 'jony.ive@apple.dev',
        visibility: 'share_everything',
        syncSubStatus:
          MessageChannelSyncSubStatus.FULL_MESSAGES_LIST_FETCH_PENDING,
      },
      {
        id: DEV_SEED_MESSAGE_CHANNEL_IDS.PHIL,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isContactAutoCreationEnabled: true,
        type: 'email',
        connectedAccountId: DEV_SEED_CONNECTED_ACCOUNT_IDS.PHIL,
        handle: 'phil.schiler@apple.dev',
        visibility: 'share_everything',
        syncSubStatus:
          MessageChannelSyncSubStatus.FULL_MESSAGES_LIST_FETCH_PENDING,
      },
    ])
    .execute();
};
