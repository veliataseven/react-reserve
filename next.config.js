// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://react:react123@reactreserve-giier.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: 'reactreserve',
    CLOUDINARY_URL:
      'https://api.cloudinary.com/v1_1/reactreservecode/image/upload',
    STRIPE_SECRET_KEY: 'sk_test_nWbGbO3jNJHLRR3D3wZQiqBx00iFFoHExR',
  },
};
