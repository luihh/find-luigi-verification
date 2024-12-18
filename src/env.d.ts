interface ImportMetaEnv {
  readonly DISCORD_BOT_TOKEN: string,
  readonly GUILD_ID: string,
  readonly MEMBER_ROLE_ID: string,
  NOT_VERIFIED_ROLE_ID: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}