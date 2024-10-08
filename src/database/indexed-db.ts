interface StoreSchema {
  name: string
  keypath: string
  options: {
    unique: boolean
  }
}

interface ObjectStoreMeta {
  store: string
  storeConfig: {
    keyPath: string
    autoIncrement: boolean
  }
  storeSchema: StoreSchema[]
}

interface DBConfigType {
  name: string
  version: number
  objectStoresMeta: ObjectStoreMeta[]
}

export const DBConfig: DBConfigType = {
  name: 'Cobee-Admin-db',
  version: 1,
  objectStoresMeta: [
    {
      store: 'groups',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'totalEvents', keypath: 'totalEvents', options: { unique: false } },
        { name: 'autoApproval', keypath: 'autoApproval', options: { unique: false } },
        { name: 'passcode', keypath: 'passcode', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        {
          name: 'whatsappConnectEnabled',
          keypath: 'whatsappConnectEnabled',
          options: { unique: false },
        },
        { name: 'coordinates', keypath: 'coordinates', options: { unique: false } },
        {
          name: 'whatsappGroupAdminNumber',
          keypath: 'whatsappGroupAdminNumber',
          options: { unique: false },
        },
        { name: 'public', keypath: 'public', options: { unique: false } },
        { name: 'defaultRole', keypath: 'defaultRole', options: { unique: false } },
        { name: 'totalMembers', keypath: 'totalMembers', options: { unique: false } },
        { name: 'question', keypath: 'question', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'photoUrl', keypath: 'photoUrl', options: { unique: false } },
        { name: 'postalCode', keypath: 'postalCode', options: { unique: false } },
        { name: 'active', keypath: 'active', options: { unique: false } },
        { name: 'whatsappGroupName', keypath: 'whatsappGroupName', options: { unique: false } },
        { name: 'lastModifiedAt', keypath: 'lastModifiedAt', options: { unique: false } },
        { name: 'id', keypath: 'id', options: { unique: false } },
        { name: 'members', keypath: 'members', options: { unique: false } },
      ],
    },
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: false } },
        { name: 'linkedFBAccount', keypath: 'linkedFBAccount', options: { unique: false } },
        { name: 'lastModifiedAt', keypath: 'lastModifiedAt', options: { unique: false } },
        { name: 'postalCode', keypath: 'postalCode', options: { unique: false } },
        { name: 'phone', keypath: 'phone', options: { unique: false } },
        { name: 'linkedGoogleAccount', keypath: 'linkedGoogleAccount', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'loginLockedTime', keypath: 'loginLockedTime', options: { unique: false } },
        { name: 'ipSet', keypath: 'ipSet', options: { unique: false } },
        { name: 'codeToResetPassword', keypath: 'codeToResetPassword', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'loginTryCount', keypath: 'loginTryCount', options: { unique: false } },
        { name: 'photoUrl', keypath: 'photoUrl', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
        {
          name: 'resetPasswordRequestTime',
          keypath: 'resetPasswordRequestTime',
          options: { unique: false },
        },
      ],
    },
    {
      store: 'events',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: false } },
        { name: 'pickupTimestamp', keypath: 'pickupTimestamp', options: { unique: false } },
        { name: 'totalOrderCount', keypath: 'totalOrderCount', options: { unique: false } },
        { name: 'adminCost', keypath: 'adminCost', options: { unique: false } },
        { name: 'createdUserPhone', keypath: 'createdUserPhone', options: { unique: false } },
        { name: 'shareCode', keypath: 'shareCode', options: { unique: false } },
        { name: 'deliveryZoneIdList', keypath: 'deliveryZoneIdList', options: { unique: false } },
        { name: 'paynow', keypath: 'paynow', options: { unique: false } },
        { name: 'createdUserPhotoUrl', keypath: 'createdUserPhotoUrl', options: { unique: false } },
        { name: 'productIdList', keypath: 'productIdList', options: { unique: false } },
        { name: 'extraFields', keypath: 'extraFields', options: { unique: false } },
        { name: 'lastModifiedAt', keypath: 'lastModifiedAt', options: { unique: false } },
        { name: 'pickupDuration', keypath: 'pickupDuration', options: { unique: false } },
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'groupId', keypath: 'groupId', options: { unique: false } },
        { name: 'status', keypath: 'status', options: { unique: false } },
        { name: 'termCond', keypath: 'termCond', options: { unique: false } },
        { name: 'comment', keypath: 'comment', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'discount', keypath: 'discount', options: { unique: false } },
        { name: 'photoUrls', keypath: 'photoUrls', options: { unique: false } },
        { name: 'groupName', keypath: 'groupName', options: { unique: false } },
        { name: 'createdUserId', keypath: 'createdUserId', options: { unique: false } },
        { name: 'orderNo', keypath: 'orderNo', options: { unique: false } },
        { name: 'deliveryCost', keypath: 'deliveryCost', options: { unique: false } },
        { name: 'payable', keypath: 'payable', options: { unique: false } },
        { name: 'closingTime', keypath: 'closingTime', options: { unique: false } },
        { name: 'pickupAddress', keypath: 'pickupAddress', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'createdUserName', keypath: 'createdUserName', options: { unique: false } },
        { name: 'createdUserEmail', keypath: 'createdUserEmail', options: { unique: false } },
        { name: 'coordinates', keypath: 'coordinates', options: { unique: false } },
        { name: 'deliveryStatus', keypath: 'deliveryStatus', options: { unique: false } },
        { name: 'closingTimestamp', keypath: 'closingTimestamp', options: { unique: false } },
        { name: 'pickupTime', keypath: 'pickupTime', options: { unique: false } },
        {
          name: 'createdUserPostalCode',
          keypath: 'createdUserPostalCode',
          options: { unique: false },
        },
        { name: 'products', keypath: 'title', options: { unique: false } },
      ],
    },
    {
      store: 'orders',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: false } },
        { name: 'pid', keypath: 'pid', options: { unique: false } },
        { name: 'uPhotoUrl', keypath: 'uPhotoUrl', options: { unique: false } },
        { name: 'eCreatedUserPhone', keypath: 'eCreatedUserPhone', options: { unique: false } },
        { name: 'ePickupTime', keypath: 'ePickupTime', options: { unique: false } },
        { name: 'uName', keypath: 'uName', options: { unique: false } },
        { name: 'pSubItems', keypath: 'pSubItems', options: { unique: false } },
        { name: 'ePickupTimestamp', keypath: 'ePickupTimestamp', options: { unique: false } },
        {
          name: 'eCreatedUserPostalCode',
          keypath: 'eCreatedUserPostalCode',
          options: { unique: false },
        },
        { name: 'pDescription', keypath: 'pDescription', options: { unique: false } },
        { name: 'eCreatedUserName', keypath: 'eCreatedUserName', options: { unique: false } },
        { name: 'paymentScreenshot', keypath: 'paymentScreenshot', options: { unique: false } },
        { name: 'uEmail', keypath: 'uEmail', options: { unique: false } },
        { name: 'status', keypath: 'status', options: { unique: false } },
        { name: 'eid', keypath: 'eid', options: { unique: false } },
        { name: 'eGroupName', keypath: 'eGroupName', options: { unique: false } },
        {
          name: 'eCreatedUserPhotoUrl',
          keypath: 'eCreatedUserPhotoUrl',
          options: { unique: false },
        },
        { name: 'uPhone', keypath: 'uPhone', options: { unique: false } },
        { name: 'buyerStatus', keypath: 'buyerStatus', options: { unique: false } },
        { name: 'ePhotoUrls', keypath: 'ePhotoUrls', options: { unique: false } },
        { name: 'ePickupDuration', keypath: 'ePickupDuration', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'eTitle', keypath: 'eTitle', options: { unique: false } },
        { name: 'eDescription', keypath: 'eDescription', options: { unique: false } },
        { name: 'eClosingTimestamp', keypath: 'eClosingTimestamp', options: { unique: false } },
        { name: 'uid', keypath: 'uid', options: { unique: false } },
        { name: 'eOrderNo', keypath: 'eOrderNo', options: { unique: false } },
        { name: 'lastModifiedAt', keypath: 'lastModifiedAt', options: { unique: false } },
        { name: 'pPrice', keypath: 'pPrice', options: { unique: false } },
        { name: 'comment', keypath: 'comment', options: { unique: false } },
        { name: 'pName', keypath: 'pName', options: { unique: false } },
        { name: 'ePickupAddress', keypath: 'ePickupAddress', options: { unique: false } },
        { name: 'pQuantity', keypath: 'pQuantity', options: { unique: false } },
        { name: 'pPriceNoSubItems', keypath: 'pPriceNoSubItems', options: { unique: false } },
        { name: 'eCreatedUserId', keypath: 'eCreatedUserId', options: { unique: false } },
        { name: 'pCreatedUserId', keypath: 'pCreatedUserId', options: { unique: false } },
        { name: 'uPostalCode', keypath: 'uPostalCode', options: { unique: false } },
        { name: 'eCreatedUserEmail', keypath: 'eCreatedUserEmail', options: { unique: false } },
        { name: 'eClosingTime', keypath: 'eClosingTime', options: { unique: false } },
        { name: 'eGroupId', keypath: 'eGroupId', options: { unique: false } },
        { name: 'pPhotoUrls', keypath: 'pPhotoUrls', options: { unique: false } },
        { name: 'ref', keypath: 'ref', options: { unique: false } },
      ],
    },
  ],
}
