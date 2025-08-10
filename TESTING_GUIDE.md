# CutApp Testing Guide

This comprehensive guide will help you test all the currently implemented features in CutApp to ensure they work correctly.

## Prerequisites

### Development Environment Setup
1. **Start the development server**:
   ```bash
   cd apps/web
   bun run dev
   ```
   - Server should start at `http://localhost:3000`
   - Verify no compilation errors in terminal

2. **Browser Requirements**:
   - Use Chrome, Firefox, or Safari (latest versions)
   - Enable JavaScript
   - Allow camera/microphone access if prompted

## Core Features Testing

### 1. Project Management

#### ✅ Test: Create New Project
1. Navigate to `http://localhost:3000`
2. Click "New Project" or similar button
3. **Expected**: Should redirect to editor with new project ID
4. **Verify**: URL shows `/editor/[project-id]`

#### ✅ Test: Project Persistence
1. Create a new project
2. Add some media or text elements
3. Refresh the browser
4. **Expected**: Project should reload with all elements intact
5. **Verify**: Timeline shows previously added elements

### 2. Media Import and Management

#### ✅ Test: Media Upload
1. In the editor, locate the Media Panel (left sidebar)
2. Click on "Media" tab
3. Try these upload methods:
   - **Drag & Drop**: Drag video/audio/image files into the media panel
   - **Click Upload**: Click upload button and select files
4. **Expected**: Files should appear in media library with thumbnails
5. **Supported Formats**: MP4, MOV, AVI (video), MP3, WAV (audio), JPG, PNG (images)

#### ✅ Test: Media Preview
1. Upload a video file
2. Hover over the media item
3. **Expected**: Should show preview thumbnail
4. Right-click on media item
5. **Expected**: Context menu should appear with options

### 3. Timeline Functionality

#### ✅ Test: Add Media to Timeline
1. Upload media files to media panel
2. Drag media from media panel to timeline
3. **Expected**: 
   - Video files create video tracks
   - Audio files create audio tracks
   - Images create video tracks
4. **Verify**: Elements appear on timeline with correct duration

#### ✅ Test: Timeline Navigation
1. Add media to timeline
2. Test playhead movement:
   - Click anywhere on timeline ruler
   - **Expected**: Playhead jumps to clicked position
   - Drag playhead left/right
   - **Expected**: Smooth playhead movement

#### ✅ Test: Timeline Zoom
1. Locate zoom controls in timeline toolbar
2. Test zoom in/out buttons
3. **Expected**: Timeline scale changes, elements resize accordingly
4. **Verify**: Zoom level indicator updates

### 4. Video Editing Operations

#### ✅ Test: Cut/Split Elements
1. Add video to timeline
2. Position playhead in middle of video element
3. Right-click on element → "Split" or use Scissors tool
4. **Expected**: Element splits into two parts at playhead position
5. **Verify**: Both parts are selectable and moveable

#### ✅ Test: Trim Elements
1. Add media to timeline
2. Hover over element edges
3. **Expected**: Cursor changes to resize cursor
4. Drag edge to trim start/end
5. **Expected**: Element duration changes, preview updates

#### ✅ Test: Move Elements
1. Add multiple elements to timeline
2. Click and drag elements to different positions
3. **Expected**: Elements move smoothly
4. **Verify**: Snapping works (elements snap to other elements)

#### ✅ Test: Delete Elements
1. Select element on timeline
2. Press Delete key or right-click → "Delete"
3. **Expected**: Element disappears from timeline
4. **Verify**: Timeline duration updates if needed

### 5. Multi-Track Support

#### ✅ Test: Multiple Video Tracks
1. Add video to timeline (creates Track 1)
2. Drag another video to empty space below
3. **Expected**: Creates new video track
4. **Verify**: Both tracks play simultaneously in preview

#### ✅ Test: Audio Tracks
1. Add audio file to timeline
2. **Expected**: Creates dedicated audio track
3. **Verify**: Audio waveform displays on timeline
4. Test audio playback with video

#### ✅ Test: Track Controls
1. Locate track controls (left side of timeline)
2. Test mute button on audio track
3. **Expected**: Audio mutes/unmutes
4. Test visibility toggle on video track
5. **Expected**: Video shows/hides in preview

### 6. Preview Panel

#### ✅ Test: Video Playback
1. Add video to timeline
2. Click play button in preview panel
3. **Expected**: Video plays with audio
4. **Verify**: Playhead moves along timeline during playback

#### ✅ Test: Playback Controls
1. Test all playback buttons:
   - **Play/Pause**: Should start/stop playback
   - **Skip Forward/Backward**: Should jump 1 second
2. Test timeline scrubbing in preview panel
3. **Expected**: Smooth seeking through video

#### ✅ Test: Fullscreen Mode
1. Click expand button in preview panel
2. **Expected**: Preview enters fullscreen mode
3. Press Esc or click exit button
4. **Expected**: Returns to normal view

### 7. Text Elements

#### ✅ Test: Add Text
1. Click "Text" tab in media panel
2. Click "Add Text" or drag text template to timeline
3. **Expected**: Text element appears on timeline and preview
4. **Verify**: Text is editable and positioned correctly

#### ✅ Test: Text Editing
1. Add text element
2. Select text in preview panel
3. **Expected**: Text properties panel opens
4. Test editing:
   - Change text content
   - Modify font size, color
   - Adjust position by dragging
5. **Verify**: Changes reflect immediately in preview

### 8. Properties Panel

#### ✅ Test: Element Properties
1. Select any element on timeline
2. **Expected**: Properties panel shows element details
3. Test property modifications:
   - Duration changes
   - Position adjustments
   - Opacity/volume controls
4. **Verify**: Changes apply to selected element

### 9. Project Settings

#### ✅ Test: Canvas Settings
1. Go to Settings tab in media panel
2. Test canvas size changes (1080p, 720p, etc.)
3. **Expected**: Preview panel resizes accordingly
4. Test FPS settings
5. **Expected**: Timeline ruler updates with new frame rate

#### ✅ Test: Background Settings
1. In Settings, test background options:
   - Solid colors
   - Gradients
   - Blur effect
2. **Expected**: Preview background changes immediately

### 10. Keyboard Shortcuts

#### ✅ Test: Essential Shortcuts
1. **Space**: Play/Pause
2. **Delete**: Remove selected element
3. **Ctrl+Z**: Undo last action
4. **Ctrl+Y**: Redo action
5. **Esc**: Exit fullscreen

**Expected**: All shortcuts work as intended

### 11. Export Functionality

#### ✅ Test: Basic Export
1. Create a simple project with video/audio
2. Look for Export button (usually in header)
3. Click Export
4. **Expected**: Export process starts
5. **Verify**: Progress indicator shows
6. **Check**: Exported file downloads and plays correctly

## Advanced Testing Scenarios

### Performance Testing

#### ✅ Test: Large File Handling
1. Upload large video file (>100MB)
2. **Expected**: Upload completes without errors
3. Add to timeline and test playback
4. **Verify**: Smooth performance, no lag

#### ✅ Test: Multiple Elements
1. Add 10+ elements to timeline
2. Test playback performance
3. **Expected**: Smooth playback without stuttering
4. Test timeline responsiveness

### Browser Compatibility

#### ✅ Test: Different Browsers
1. Test in Chrome, Firefox, Safari
2. **Verify**: All features work consistently
3. Check for browser-specific issues

#### ✅ Test: Mobile Responsiveness
1. Open on mobile device or use browser dev tools
2. **Expected**: Interface adapts to smaller screen
3. **Verify**: Touch interactions work properly

## Error Handling Testing

### ✅ Test: Invalid File Types
1. Try uploading unsupported file types (.txt, .exe)
2. **Expected**: Clear error message displayed
3. **Verify**: Application doesn't crash

### ✅ Test: Network Issues
1. Disconnect internet during upload
2. **Expected**: Appropriate error handling
3. Reconnect and retry
4. **Verify**: Upload resumes or restarts properly

### ✅ Test: Memory Limits
1. Upload very large files or many files
2. **Expected**: Graceful handling of memory constraints
3. **Verify**: Clear feedback to user about limits

## UI/UX Testing

### ✅ Test: Dark/Light Mode
1. Toggle theme in settings or header
2. **Expected**: Entire interface switches themes
3. **Verify**: All elements remain readable and properly styled

### ✅ Test: Panel Resizing
1. Drag panel borders to resize
2. **Expected**: Panels resize smoothly
3. **Verify**: Content adapts to new panel sizes

### ✅ Test: Tooltips and Help
1. Hover over various buttons and controls
2. **Expected**: Helpful tooltips appear
3. **Verify**: Tooltips are accurate and informative

## Regression Testing Checklist

After any code changes, verify these core workflows:

- [ ] Create project → Add media → Play → Export
- [ ] Import multiple file types → Add to timeline → Edit → Save
- [ ] Text creation → Styling → Positioning → Preview
- [ ] Timeline operations → Cut → Move → Delete → Undo
- [ ] Multi-track editing → Audio + Video → Sync → Export

## Reporting Issues

When you find bugs or issues:

1. **Document the steps** to reproduce
2. **Note the browser** and version
3. **Include error messages** from browser console (F12)
4. **Describe expected vs actual behavior**
5. **Attach screenshots** if helpful

## Performance Benchmarks

### Expected Performance Standards:
- **Timeline loading**: < 2 seconds for 50 elements
- **Media upload**: Progress indicator for files > 10MB
- **Playback**: Smooth 30fps for 1080p content
- **Export**: Real-time or faster for basic edits
- **UI responsiveness**: < 100ms for all interactions

## Testing Tools

### Browser Developer Tools
1. **Console**: Check for JavaScript errors
2. **Network**: Monitor file uploads/downloads
3. **Performance**: Profile timeline operations
4. **Application**: Check local storage/IndexedDB

### Recommended Test Files
Prepare these test files for comprehensive testing:
- **Video**: MP4 (H.264), 1080p, 30fps, 30 seconds
- **Audio**: MP3, 44.1kHz, stereo, 30 seconds
- **Image**: JPG/PNG, 1920x1080
- **Large file**: Video > 100MB
- **Various formats**: MOV, AVI, WAV, etc.

## Conclusion

This testing guide covers all currently implemented features in CutApp. Regular testing ensures:
- **Feature stability** across updates
- **Cross-browser compatibility**
- **Performance optimization**
- **User experience quality**

Run through this guide after any significant changes to ensure CutApp continues to work reliably for all users.

---

**Last Updated**: January 2025  
**Version**: CutApp v0.1.0  
**Status**: All listed features are currently implemented and testable