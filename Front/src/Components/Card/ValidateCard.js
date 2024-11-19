export const validateForm = (formData, setErrors) => {
    let isValid = true;
    let errors = {};

    if (!formData.name || formData.name.length < 2) {
        isValid = false;
        errors.name = 'Product name must be at least 2 characters long.';
    }

    if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
        isValid = false;
        errors.price = 'Price must be a valid number greater than 0.';
    }

    if (!formData.description || formData.description.length < 10) {
        isValid = false;
        errors.description = 'Description must be at least 10 characters long.';
    }

    if (!formData.category || formData.category.length < 2) {
        isValid = false;
        errors.category = 'Category must be at least 2 characters long.';
    }

    const phoneRegex = /^[0]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
        isValid = false;
        errors.phone = 'Phone number must start with 0 and contain exactly 10 digits.';
    }

    const UrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    if (!formData.image.url[0] || !UrlRegex.test(formData.image.url[0])) {
        isValid = false;
        errors.imageUrl = 'Image URL must be a valid URL ending in .jpg, .gif, or .png.';
    }

    if (!formData.image.alt || formData.image.alt.length < 2) {
        isValid = false;
        errors.imageAlt = 'Image alt text must be at least 2 characters long.';
    }

    if (!formData.address.state || formData.address.state.length < 2) {
        isValid = false;
        errors.state = 'State must be at least 2 characters long.';
    }

    if (!formData.address.country || formData.address.country.length < 2) {
        isValid = false;
        errors.country = 'Country must be at least 2 characters long.';
    }

    if (!formData.address.city || formData.address.city.length < 2) {
        isValid = false;
        errors.city = 'City must be at least 2 characters long.';
    }

    if (!formData.address.street || formData.address.street.length < 2) {
        isValid = false;
        errors.street = 'Street must be at least 2 characters long.';
    }

    if (!formData.address.houseNumber || formData.address.houseNumber.length < 1) {
        isValid = false;
        errors.houseNumber = 'House number is required.';
    }

    if (!formData.address.zip || formData.address.zip.length < 4) {
        isValid = false;
        errors.zip = 'Zip code must be at least 4 characters long.';
    }

    setErrors(errors);
    return isValid;
};
