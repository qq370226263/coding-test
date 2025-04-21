export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 10, 
      propList: ['*'], 
      selectorBlackList: [], 
      exclude: /node_modules/i 
    }
  }
} 