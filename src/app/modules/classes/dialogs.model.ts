export class GroupPreferences {
  listenForNotifications: boolean;

  constructor(
    notif: boolean = true
  ) {
    this.listenForNotifications = notif;
  }

  public clone(): GroupPreferences {
    let newInstance = new GroupPreferences(
      this.listenForNotifications
    )
    return newInstance;
  }
}
