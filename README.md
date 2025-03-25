
# TemplateHub

## Setup Instructions

### Adding Required Scripts

Before you can build this project properly, you need to add the following script to your package.json file:

```json
"build:dev": "vite build --mode development"
```

You can add this script to your package.json manually by:

1. Going to Dev Mode (toggle in the top left)
2. Editing the package.json file
3. Adding the script under the "scripts" section
4. Saving the file

This script is required for proper development builds.

## Project Overview

TemplateHub is a platform for managing and accessing various templates.

## Features

- User authentication with Supabase
- Template management
- Responsive design

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Supabase for backend
