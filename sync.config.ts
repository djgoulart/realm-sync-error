type ISyncConfig = {
  enabled: boolean,
  appId: string
};

const SYNC_CONFIG: ISyncConfig = {
  enabled: true,
  appId: 'your-app-id-here'
};

export { SYNC_CONFIG, ISyncConfig };
