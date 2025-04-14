export class DynamicCodeExecution {
    methodA() {}
    methodB() {}

    async addItemDCE(resource) {
        const data = await this[resource.name]();
        return data;
    }
}

export class DenialOfServiceVulnerability {
    replaceWithRegex(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
}

export class IncompleteSanitizationOfString {
    sanitize(input) {
        return input.replace('{', '').replace('}', '');
    }
}

export class UnsafeDeserialization {
    parseUserData(jsonString) {
        return JSON.parse(jsonString);
    }
}
