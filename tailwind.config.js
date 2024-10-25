tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            backgroundImage:{
                'hero-image': "linear-gradient(to right, black, transparent), url('assets/img/webp/modern-architecture.webp')",
                'overlay-gradient-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 46%, rgba(5, 2, 17, 1) 87%)',
                'overlay-gradient-card-wide': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 30%, rgba(5, 2, 17, 1) 100%)',
            }
        },
    },
};