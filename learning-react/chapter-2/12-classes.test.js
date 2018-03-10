/*
new class declarations in javascript, rather than functions
*/

class Trip{
    constructor( destination, meansOfTravel, duration){
        this.destination = destination
        this.meansOfTravel = meansOfTravel
        this.duration = duration
    }
    summary(){
        return `${this.meansOfTravel} to ${this.destination} for ${this.duration} days`
    }
}

//and with inheritance
class SchoolTrip extends Trip {
    constructor( destination, meansOfTravel, duration, school, teacher){
        super( destination, meansOfTravel, duration)
        this.school = school
        this.teacher = teacher
    }
    summary(){
        return `School Trip. School: ${this.school}, Teacher: ${this.teacher}, Trip: ${super.summary()}`
    }
}

describe('classes', () => {
    test('basic instance instantiation', () => {
        let holiday = new Trip( 'Spain', 'flight', 14)
        expect(holiday).toBeInstanceOf(Trip)
        expect(holiday.destination).toBe('Spain')
        expect(holiday.summary()).toBe('flight to Spain for 14 days')
    })
    test('simple prototypal inheritance', () => {
        let schooltrip = new SchoolTrip( 'Paris', 'bus', 5, 'Dundee High', 'Mrs. Crow')
        expect(schooltrip).toBeInstanceOf(SchoolTrip)
        expect(schooltrip.teacher).toBe('Mrs. Crow')
        expect(schooltrip.summary()).toBe(
            "School Trip. School: Dundee High, Teacher: Mrs. Crow, Trip: bus to Paris for 5 days"
        )
    })
})
