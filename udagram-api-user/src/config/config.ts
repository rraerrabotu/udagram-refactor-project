export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'backend_port': process.env.BACKEND_PORT,
  'front_port': process.env.FRONTEND_PORT,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'backend_url': process.env.APIUSER_URL,
  'frontend_url': process.env.FRONTEND_URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
