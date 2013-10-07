//  ProgressHUD.h
//
//  Created by Pierre-Emmanuel Bois on 23/09/13.
//
//  Copyright 2012-2013 Pierre-Emmanuel Bois. All rights reserved.
//  MIT Licensed

#import <Cordova/CDV.h>
#import "MBProgressHUD.h"

@interface ProgressHUD : CDVPlugin {
}

@property (nonatomic, assign) MBProgressHUD* progressHUD;

- (void)show:(CDVInvokedUrlCommand*)command;
- (void)hide:(CDVInvokedUrlCommand*)command;

@end
