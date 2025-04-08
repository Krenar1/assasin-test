"""
Configuration helpers for Vercel deployment
"""
import os

def get_vercel_region():
    """Get the current Vercel region"""
    return os.environ.get('VERCEL_REGION', 'fra1')

def is_vercel_environment():
    """Check if running in Vercel environment"""
    return 'VERCEL' in os.environ or 'VERCEL_REGION' in os.environ

def get_vercel_url():
    """Get the Vercel URL for the current deployment"""
    if is_vercel_environment():
        # In production
        return f"https://{os.environ.get('VERCEL_URL', '')}"
    # Local development
    return "http://localhost:8000"

def configure_for_vercel(settings_dict):
    """
    Modifies Django settings for Vercel deployment
    
    Args:
        settings_dict: The Django settings dictionary
    """
    if is_vercel_environment():
        # Update settings for Vercel
        settings_dict['DEBUG'] = False
        settings_dict['ALLOWED_HOSTS'].append('.vercel.app')
        
        # Configure for Vercel's serverless environment
        settings_dict['STATICFILES_STORAGE'] = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
        if 'whitenoise.middleware.WhiteNoiseMiddleware' not in settings_dict['MIDDLEWARE']:
            settings_dict['MIDDLEWARE'].insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')
            
        # Security settings
        settings_dict['SECURE_SSL_REDIRECT'] = True
        settings_dict['SECURE_HSTS_SECONDS'] = 31536000  # 1 year
        settings_dict['SECURE_HSTS_INCLUDE_SUBDOMAINS'] = True
        settings_dict['SECURE_HSTS_PRELOAD'] = True
