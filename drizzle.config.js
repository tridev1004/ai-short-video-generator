/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://ai-interview-mocker_owner:qVaR6N2BHMsg@ep-misty-bread-a5icze2w.us-east-2.aws.neon.tech/Ai-short-%20maker?sslmode=require'
    }
  };