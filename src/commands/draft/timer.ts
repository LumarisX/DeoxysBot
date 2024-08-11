export class Timer {
  minutes: number;
  private remainingSeconds: number;
  get remainingMinutes() {
    return Math.round(this.remainingSeconds / 60);
  }
  reminders: number[];
  startTime: number = 0;
  remind: (remainingMinutes: number) => void;
  runout: () => void;

  timeout: NodeJS.Timeout | undefined;

  constructor(
    minutes: number,
    reminders: number[],
    remind: (remainingMinutes: number) => void,
    runout: () => void
  ) {
    this.minutes = minutes;
    this.reminders = reminders;
    this.remainingSeconds = minutes * 60;
    this.remind = remind;
    this.runout = runout;
  }

  start() {
    if (this.remainingSeconds <= 0) return;
    let next = this.nextReminder();
    this.timeout = setTimeout(() => {
      if (next > 0) {
        this.remind(next);
      } else {
        this.runout();
      }
      this.remainingSeconds =
        this.remainingSeconds - (this.remainingSeconds - next * 60);
      this.start();
    }, (this.remainingSeconds - next * 60) * 1000);

    this.startTime = Date.now();
  }

  pause() {
    clearTimeout(this.timeout);
    this.timeout = undefined;
    let pauseTime = Date.now();
    this.remainingSeconds -= pauseTime - this.startTime;
  }

  end() {
    clearTimeout(this.timeout);
    console.log("ended");
    this.timeout = undefined;
    return this.timeout;
  }

  private nextReminder(): number {
    return this.reminders.reduce(
      (soonest, reminder) =>
        reminder < this.remainingMinutes && reminder > soonest
          ? reminder
          : soonest,
      0
    );
  }
}
