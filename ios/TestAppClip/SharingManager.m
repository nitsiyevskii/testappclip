#import "SharingManager.h"

@implementation SharingManager
NSUserDefaults *mySharedDefaults;
NSString *appGroupName = @"";
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getItem: (NSString *)key :(NSString *)appGroup :(RCTResponseSenderBlock)callback) {
    if (![appGroup isEqualToString:appGroupName]) {
      mySharedDefaults = [[NSUserDefaults alloc] initWithSuiteName:appGroup];
    }
    if (mySharedDefaults == nil) {
      return;
    }

    if ([mySharedDefaults valueForKey:key] == nil) {
      return;
    }
    callback(@[[NSNull null], [mySharedDefaults valueForKey:key]]);
  }

  RCT_EXPORT_METHOD(setItem: (NSString *)key :(NSString *)value :(NSString *)appGroup) {
    if (![appGroup isEqualToString:appGroupName]) {
      appGroupName = appGroup;
      mySharedDefaults = [[NSUserDefaults alloc] initWithSuiteName:appGroup];
    }
    if (mySharedDefaults == nil) {
      return;
    }

    [mySharedDefaults setValue:value forKey:key];
  }
@end
