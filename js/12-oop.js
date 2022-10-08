

class DateMixins {
    constructor(date) {
        this.date = date
    }
    yearMonthDayFormat(){
        // year - month - day
        return `${this.date.getFullYear()}-${this.date.getMonth()}-${this.date.getDay()}`
    }

}


// constructor fun
function User(fname, lname, dob){
    this.fname = fname
    this.lname = lname
    this.dob = new Date(dob)
    this.yearOfBirth = function (){
        return this.dob.getFullYear()
    }
    this.fullName = function (){
        return this.fname + " " + this.lname
    }
    this.monthOfBirth = this.dob.getMonth()
}

User.prototype.getDayOfBirth = function (){
    return this.dob.getDay()
}

// instantiate an obj
john = new User('John', 'Nick', '11-20-1990') // month-day-year
console.log(john.fname)
console.log(john.dob)
console.log(new DateMixins(john.dob).yearMonthDayFormat())
console.log(john.yearOfBirth())
console.log(john.fullName())
console.log(john)
console.log(john.monthOfBirth)
console.log(User.prototype)
console.log(john.getDayOfBirth())


class Profile{
    constructor(username, dob, about, isMale = true) {
        this.username = username
        this.dob = dob
        this.about = about
        this.isMale = isMale
        this.gender = this.getGender()
    }

    getFullInfo(){
        return `Username: ${this.username}\nDateOfBirth: ${this.dob}\nAbout: ${this.about}`
    }
    getGender(){
        const [MALE, FEMALE] = ['Male', 'Female']

        if (this.isMale){
            return MALE
        }
        return FEMALE
    }
}

mark = new Profile('Mark Z', '01-01-1990', 'Meta / facebook creator')
sara = new Profile('Sara', '01-01-1990', 'JS developer', false)
console.log(mark.username)
console.log(mark.dob)
console.log(mark.about)
console.log("#".repeat(100))
console.log(mark.getFullInfo())
console.log(mark.getGender())
console.log(sara.getGender())


