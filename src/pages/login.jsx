// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useNavigate, useToast, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Button, Checkbox } from '@/components/ui';
// @ts-ignore;
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

import { useForm } from 'react-hook-form';
export default function Login(props) {
  const {
    $w
  } = props;
  const {
    navigateTo
  } = $w.utils;
  const {
    toast
  } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const switchToRegister = () => {
    navigateTo({
      pageId: 'register',
      params: {}
    });
  };
  const onSubmit = async data => {
    setIsLoading(true);
    try {
      // 调用云函数进行登录
      const result = await $w.cloud.callFunction({
        name: 'login',
        data: {
          email: data.email,
          password: data.password
        }
      });
      if (result.success) {
        toast({
          title: '登录成功',
          description: '欢迎回来，继续您的修行之旅'
        });
        navigateTo({
          pageId: 'meditation',
          params: {}
        });
      } else {
        toast({
          title: '登录失败',
          description: result.message || '请检查邮箱和密码',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('登录错误:', error);
      toast({
        title: '登录失败',
        description: '网络错误，请稍后重试',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-[#F0E6FF] to-[#FFF0F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 品牌标识 */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">禅</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">禅心修行</h1>
            <p className="text-gray-600">静心冥想，回归本真</p>
          </div>

          {/* 标签页切换 */}
          <div className="flex border-b border-gray-200 mb-6">
            <button className={`flex-1 py-3 text-center font-medium ${activeTab === 'login' ? 'text-[#6C47FF] border-b-2 border-[#6C47FF]' : 'text-gray-500'}`} onClick={() => setActiveTab('login')}>
              登录
            </button>
            <button className={`flex-1 py-3 text-center font-medium ${activeTab === 'register' ? 'text-[#6C47FF] border-b-2 border-[#6C47FF]' : 'text-gray-500'}`} onClick={switchToRegister}>
              注册
            </button>
          </div>

          {/* 表单 */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-gray-700 text-sm">邮箱</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input {...field} type="email" placeholder="请输入邮箱" className="pl-10 pr-4 py-3 bg-gray-50 border-gray-200 focus:border-[#6C47FF] rounded-lg" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="password" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-gray-700 text-sm">密码</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input {...field} type={showPassword ? 'text' : 'password'} placeholder="请输入密码" className="pl-10 pr-12 py-3 bg-gray-50 border-gray-200 focus:border-[#6C47FF] rounded-lg" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              {/* 记住我和忘记密码 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    记住我
                  </label>
                </div>
                <button type="button" className="text-sm text-[#6C47FF] hover:text-[#5A3BD9]">
                  忘记密码？
                </button>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] hover:from-[#5A3BD9] hover:to-[#7C3AED] text-white py-3 rounded-lg font-medium">
                {isLoading ? '登录中...' : '登录'}
              </Button>
            </form>
          </Form>

          {/* 注册链接 */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              还没有账号？{' '}
              <button onClick={switchToRegister} className="text-[#6C47FF] hover:text-[#5A3BD9] font-medium underline">
                立即注册
              </button>
            </p>
          </div>

          {/* 法律声明 */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              继续即表示您同意我们的服务条款和隐私政策
            </p>
          </div>
        </div>
      </div>
    </div>;
}