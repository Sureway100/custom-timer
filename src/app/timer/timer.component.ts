import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})


// export class TimerComponent {
//   hours: number | null = null;
//   minutes: number | null = null;
//   seconds: number | null = null;
//   timeLeft: string | null = null;
//   totalSeconds: number = 0;
//   timer: any;
//   isPaused: boolean = false;
//   isTimerRunning: boolean = false;

//   startTimer() {
//     this.totalSeconds = (this.hours || 0) * 3600 + (this.minutes || 0) * 60 + (this.seconds || 0);

//     if (this.totalSeconds < 5 || this.totalSeconds > 86400) {
//       alert('Please provide a valid time between 5 seconds and 24 hours.');
//       return;
//     }

//     this.isTimerRunning = true;
//     this.runTimer();
//   }

//   runTimer() {
//     this.timer = setInterval(() => {
//       if (!this.isPaused && this.totalSeconds > 0) {
//         this.totalSeconds--;
//         this.timeLeft = this.formatTime(this.totalSeconds);
//       } else if (this.totalSeconds <= 0) {
//         clearInterval(this.timer);
//         this.showToast();
//         this.isTimerRunning = false;
//       }
//     }, 1000);
//   }

//   toggleTimer() {
//     this.isPaused = !this.isPaused;
//   }

//   restartTimer() {
//     clearInterval(this.timer);
//     this.isPaused = false;
//     this.isTimerRunning = false;
//     this.timeLeft = null;
//     this.hours = null;
//     this.minutes = null;
//     this.seconds = null;
//   }

//   formatTime(seconds: number): string {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs}h ${mins}m ${secs}s`;
//   }

//   showToast() {
//     alert('Your time is up!');
//   }
// }



export class TimerComponent {
  hours: number | null = null;
  minutes: number | null = null;
  seconds: number | null = null;
  timeLeft: string | null = null;
  totalSeconds: number = 0;
  timer: any;
  isPaused: boolean = false;
  isTimerRunning: boolean = false;
  validationError: string | null = null;

  validateInput(field: string) {
    if (field === 'hours' && (this.hours !== null && (this.hours < 1 || this.hours > 24))) {
      this.validationError = 'Hours must be between 1 and 24.';
    } else if (field === 'minutes' && (this.minutes !== null && (this.minutes < 1 || this.minutes > 60))) {
      this.validationError = 'Minutes must be between 1 and 60.';
    } else if (field === 'seconds' && (this.seconds !== null && (this.seconds < 1 || this.seconds > 60))) {
      this.validationError = 'Seconds must be between 1 and 60.';
    } else {
      this.validationError = null;
    }
  }

  startTimer() {
    if (this.validationError) {
      return;
    }

    this.totalSeconds = (this.hours || 0) * 3600 + (this.minutes || 0) * 60 + (this.seconds || 0);

    if (this.totalSeconds < 5 || this.totalSeconds > 86400) {
      alert('Please provide a valid time between 5 seconds and 24 hours.');
      return;
    }

    this.isTimerRunning = true;
    this.runTimer();
  }

  runTimer() {
    this.timer = setInterval(() => {
      if (!this.isPaused && this.totalSeconds > 0) {
        this.totalSeconds--;
        this.timeLeft = this.formatTime(this.totalSeconds);
      } else if (this.totalSeconds <= 0) {
        clearInterval(this.timer);
        this.showToast();
        this.isTimerRunning = false;
      }
    }, 1000);
  }

  toggleTimer() {
    this.isPaused = !this.isPaused;
  }

  restartTimer() {
    clearInterval(this.timer);
    this.isPaused = false;
    this.isTimerRunning = false;
    this.timeLeft = null;
    this.hours = null;
    this.minutes = null;
    this.seconds = null;
    this.validationError = null;
  }

  formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  }

  showToast() {
    alert('Your time is up!');
  }
}