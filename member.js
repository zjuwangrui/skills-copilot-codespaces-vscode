function skillsMember(){
    return {
        name: "skillsMember",
        description: "A member of the skills team",
        type: "object",
        properties: {
            name: {
                type: "string",
                description: "The name of the member"
            },
            role: {
                type: "string",
                description: "The role of the member"
            },
            experience: {
                type: "number",
                description: "Years of experience in the field"
            }
        },
        required: ["name", "role"]
    };
    // Example usage
    const member = {
        name: "John Doe",
        role: "Developer",
        experience: 5
    };
    console.log(member);
    // Output: { name: 'John Doe', role: 'Developer', experience: 5 }
    // This code defines a schema for a skills team member, including their name, role, and experience.
    // The example usage creates an object that adheres to this schema and logs it to the console.
    // The output shows the created object with the specified properties.
}