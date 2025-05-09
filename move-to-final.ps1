# PowerShell script to move the project from temp directory to final destination

# Define source and destination paths
$sourceDir = "C:\websites\temp-dentist"
$destDir = "C:\websites\dentist"

# Create a backup of the existing dentist directory if it exists
if (Test-Path $destDir) {
    $backupDir = "$destDir-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
    Write-Host "Creating backup of existing dentist directory to $backupDir"
    Rename-Item -Path $destDir -NewName $backupDir
}

# Create the destination directory
New-Item -ItemType Directory -Path $destDir -Force | Out-Null

# Copy all files from source to destination
Write-Host "Copying files from $sourceDir to $destDir"
Copy-Item -Path "$sourceDir\*" -Destination $destDir -Recurse -Force

Write-Host "Project successfully moved to $destDir"
Write-Host "You can now navigate to the directory and run 'npm run dev' to start the development server"
