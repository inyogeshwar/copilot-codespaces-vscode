function skillsMember() {
    return {
        name: "Skills Member",
        skills: ["JavaScript", "Node.js", "React"],
        experience: 5,
        calculateExperience: function(years) {
            return this.experience + years;
        },
        displaySkills: function() {
            return this.skills.join(", ");
        }
    };
}