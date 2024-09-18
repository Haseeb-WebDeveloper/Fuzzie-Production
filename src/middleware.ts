// Import the authMiddleware from Clerk's Next.js package
import { authMiddleware } from '@clerk/nextjs'

// Export the configured authMiddleware
export default authMiddleware({
  // Define routes that are accessible without authentication
  publicRoutes: [
    '/', // Home page
    '/api/clerk-webhook', // Webhook endpoint for Clerk events
    '/api/drive-activity/notification', // Endpoint for drive activity notifications
    '/api/payment/success', // Payment success callback endpoint
  ],
  // Define routes that should be ignored by the auth middleware
  ignoredRoutes: [
    '/api/auth/callback/discord', // OAuth callback for Discord
    '/api/auth/callback/notion', // OAuth callback for Notion
    '/api/auth/callback/slack', // OAuth callback for Slack
    '/api/flow', // Custom flow endpoint
    '/api/cron/wait', // Endpoint for cron job waiting
  ],
})

// Export the configuration for the middleware
export const config = {
  // Define the matcher for routes where the middleware should be applied
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // Match all routes except static files and Next.js internals
    '/', // Match the root route
    '/(api|trpc)(.*)', // Match all API and tRPC routes
  ],
}

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly