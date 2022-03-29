export class MatPasswordStrengthValidator {
    isUndefinedOrEmpty(control) {
        if (!control || !control.value || control.value.length === 0) {
            return undefined;
        }
    }
    validate(criteria, regex) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (!regex.test(control.value)) {
                const failed = {};
                failed[criteria] = {
                    actualValue: control.value,
                    requiredPattern: regex
                };
                return failed;
            }
            return undefined;
        };
        return validator;
    }
    confirm(password) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (control.value !== password) {
                return {
                    notConfirmed: {
                        password: password,
                        passwordConfirmation: control.value
                    }
                };
            }
            return undefined;
        };
        return validator;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL3ZhbGlkYXRvci9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyw0QkFBNEI7SUFFdkMsa0JBQWtCLENBQUMsT0FBd0I7UUFDekMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQixFQUFFLEtBQWE7UUFDdEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUF3QixFQUEwQixFQUFFO1lBQ3JFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUNqQixXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSxLQUFLO2lCQUN2QixDQUFDO2dCQUNGLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQWdCO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBd0IsRUFBMEIsRUFBRTtZQUNyRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDOUIsT0FBTztvQkFDTCxZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxLQUFLO3FCQUNwQztpQkFDRixDQUFBO2FBQ0Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIE1hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3Ige1xuXG4gIGlzVW5kZWZpbmVkT3JFbXB0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBhbnkgfCB1bmRlZmluZWQge1xuICAgIGlmICghY29udHJvbCB8fCAhY29udHJvbC52YWx1ZSB8fCBjb250cm9sLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShjcml0ZXJpYTogc3RyaW5nLCByZWdleDogUmVnRXhwKTogVmFsaWRhdG9yRm4ge1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgIHRoaXMuaXNVbmRlZmluZWRPckVtcHR5KGNvbnRyb2wpO1xuICAgICAgaWYgKCFyZWdleC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGZhaWxlZCA9IHt9O1xuICAgICAgICBmYWlsZWRbY3JpdGVyaWFdID0ge1xuICAgICAgICAgIGFjdHVhbFZhbHVlOiBjb250cm9sLnZhbHVlLFxuICAgICAgICAgIHJlcXVpcmVkUGF0dGVybjogcmVnZXhcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZhaWxlZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gdmFsaWRhdG9yO1xuICB9XG5cbiAgY29uZmlybShwYXNzd29yZDogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgIHRoaXMuaXNVbmRlZmluZWRPckVtcHR5KGNvbnRyb2wpO1xuICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm90Q29uZmlybWVkOiB7XG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogY29udHJvbC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiB2YWxpZGF0b3I7XG4gIH1cblxufVxuIl19