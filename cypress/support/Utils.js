class Utils {
    getRandomEmail() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const usernameLength = Math.floor(Math.random() * 10) + 5;  // Random length between 5-15
        const domainLength = Math.floor(Math.random() * 5) + 3;  // Random length between 3-8
        // Generate random username
        let username = '';
        for (let i = 0; i < usernameLength; i++) {
            username += chars[Math.floor(Math.random() * chars.length)];
        }
        // Generate random domain
        let domain = '';
        for (let i = 0; i < domainLength; i++) {
            domain += chars[Math.floor(Math.random() * chars.length)];
        }
        // List of common TLDs
        const tlds = ['com', 'net', 'org', 'io', 'co'];
        const randomTld = tlds[Math.floor(Math.random() * tlds.length)];
        return `${username}@${domain}.${randomTld}`;
    }

    generateRandomName() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const firstNameLength = Math.floor(Math.random() * 2) + 5;
        // Generate random username
        let firstName = '';
        for (let i = 0; i < firstNameLength; i++) {
            firstName += chars[Math.floor(Math.random() * chars.length)];
        }
        return firstName;
    }

    generateRandomPassword() {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
        const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
        const firstChar = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]
        let password ='';
        for (let i = 0; i < 7; i++) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }
        return firstChar +password +specialChar;
    }
}
export const utils = new Utils();