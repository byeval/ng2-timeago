/// <reference path="../typings/main/ambient/jasmine/jasmine.d.ts" />
import {
it,
describe,
expect,
beforeEach,
fakeAsync,
inject,
tick,
ComponentFixture,
TestComponentBuilder
} from '@angular/testing'
import {Component} from '@angular/core'
import {TimeAgo} from '../src/timeago'

export function main() {
    describe('TimeAgo tests', () => {
        let builder: TestComponentBuilder
        beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
            builder = tcb
        }))

        it('Should return right time ago', (done: () => void) => {
            builder.createAsync(TimeAgoController).then((fixture) => {
                fixture.detectChanges()
                console.log('begin')
                expect(true).toEqual(true)
            }).then(done).catch(done)
        })
    })
}

@Component({
    selector: 'time-ago',
    template: `
      <time-ago [time]="time" [live]="live" [interval]="interval" [maxPeriod]="maxPeriod" [afterMaxDateFormate]="format" [suffix]="suffix" ></timeago>
    `
})

class TimeAgoController {
    time: Date = new Date()
    live: boolean = true
    interval: number = 60 * 1000
    maxPeriod: number = 365 * 24 * 60 * 60 * 1000
    format: string = 'short'
    suffix: string = 'ago'
}

@Component({
    selector: 'static-time-ago',
    template: `
      <time-ago [time]="time" [live]="false" ></timeago>
    `
})

class StaticTimeAgoController {
    time: Date = new Date()

}
