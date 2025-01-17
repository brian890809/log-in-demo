'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from "@/components/withAuth"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Page = () => {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            const response = await fetch('/api/logout', { method: 'POST' });
            if (response.ok) {
              router.push('/login');
            } else {
              console.error('Failed to log out');
            }
          } catch (error) {
            console.error('Error logging out:', error);
          }
    };
      
    return (
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                <CardTitle className="text-2xl">Logged In</CardTitle>
                <CardDescription>
                    This is a protected route
                </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <Button className="w-full" onClick={handleLogout}>
                        Log out
                        </Button>
                    </div>
                </CardContent>
            </Card>
            </div>
        </div>
      </div>
    );
}

export default withAuth(Page)
