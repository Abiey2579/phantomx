import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
const ContactSalesDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>Contact Sale</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Sale</DialogTitle>
        </DialogHeader>
        <form id="contact-sales-form" className="space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1 block text-sm font-medium text-neutral-700"
            >
              Full Name
            </label>
            <Input type="text" id="contact-name" name="contact-name" required />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1 block text-sm font-medium text-neutral-700"
            >
              Work Email
            </label>
            <Input
              type="email"
              id="contact-email"
              name="contact-email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="mb-1 block text-sm font-medium text-neutral-700"
            >
              Company
            </label>
            <Input
              type="text"
              id="contact-company"
              name="contact-company"
              required
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-1 block text-sm font-medium text-neutral-700"
            >
              Phone Number
            </label>
            <Input
              type="tel"
              id="contact-phone"
              name="contact-phone"
              className="focus:outline-no w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-[#4A90E2] focus:ring-[#4A90E2]"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block text-sm font-medium text-neutral-700"
            >
              Message
            </label>
            <Textarea id="contact-message" name="contact-message" rows={3} />
          </div>

          <div className="mt-5 flex justify-end space-x-3">
            <Button
              size={'sm'}
              type="button"
              id="cancel-demo-modal"
              variant={'ghost'}
            >
              Cancel
            </Button>
            <Button size={'sm'} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSalesDialog;
